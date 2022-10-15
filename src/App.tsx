import { Envelope, Lock, Eye, EyeSlash } from 'phosphor-react'
import { useState } from 'react'
import Button from './components/Button'
import Checkbox from './components/Checkbox'
import Heading from './components/Heading'
import Logo from './components/Logo'
import Text from './components/Text'
import { TextInput } from './components/TextInput'
import './styles/global.css'

const App = () => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='w-screen h-screen bg-gray-900 flex justify-center items-center flex-col text-gray-100'>
      <header className='flex flex-col items-center my-4'>
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text className="text-gray-400 mt-2">
          Faça login e comece a usar!
        </Text>
      </header>
      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm">
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className="font-semibold">Endereço de email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input id="email" type="email" placeholder="johndoe@example.com" />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id="password" type={showPassword ? "text" : "password"} placeholder="**************" />
            <TextInput.IconTwo onClick={() => setShowPassword(!showPassword)}>
              {
                showPassword ? <Eye /> : <EyeSlash />
              }
            </TextInput.IconTwo>
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2 mt-4">
          <Checkbox id="remember" />
          <Text>
            Lembrar de mim por 30 dias
          </Text>
        </label>
        <Button type="submit"className="mt-8">
          Entrar na plataforma
        </Button>
      </form>
      <footer className="flex flex-col items-center justify-center gap-4 mt-8">
        <Text className="text-gray-400 underline transition-colors hover:text-gray-100"> 
          <a href="">Esqueceu sua senha?</a>
        </Text>
        <Text className="text-gray-400 underline transition-colors hover:text-gray-100">
          <a href="">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}

export default App
