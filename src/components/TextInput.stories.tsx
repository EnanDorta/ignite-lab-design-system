import { Meta, StoryObj } from '@storybook/react'
import {TextInput, TextInputRootProps }  from './TextInput'
import { Envelope, Eye, EyeSlash, Lock } from 'phosphor-react'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
   children: [
    <TextInput.Icon>
      <Envelope />
    </TextInput.Icon>,
    <TextInput.Input placeholder="Type your e-mail address" />
  ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your e-mail address" />
  }
}

export const PasswordInput: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <Lock />
      </TextInput.Icon>,
      <TextInput.Input type="password" placeholder="**********"/>,
      <TextInput.IconTwo>
        <EyeSlash />
      </TextInput.IconTwo>
    ]
  }
}
