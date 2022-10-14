import { Meta, StoryObj } from '@storybook/react'
import Checkbox, { CheckBoxProps  }  from './Checkbox'
import Text from './Text'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm"> Lembrar de mim por 30 dias </Text>
        </div>
      )
    }
  ]
} as Meta<CheckBoxProps>

export const Default: StoryObj<CheckBoxProps> = {}
