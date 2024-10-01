/* eslint-disable no-console */
import { access } from 'node:fs/promises'
import { join } from 'node:path'
import { exit } from 'node:process'
import { defineCommand, runMain } from 'citty'

const TEMPLATES_PATH = join(__dirname, './src/templates')

const main = defineCommand({
  meta: {
    name: 'Create project ',
    description: 'Create folder structure for new project with minimal setup and basic components',
  },
  args: {
    name: {
      type: 'positional',
      description: 'Your project name: eg: product-list-with-cart',
      required: true,
    },
  },
  run: async (context) => {
    const projectName = context.args.name
    const dir = './src/projects'

    const dirToCheck = `${dir}/${projectName}`

    const isProjectExist = await checkProjectExist(dirToCheck)

    if (isProjectExist) {
      exit(1)
    }
    else {

    }
  },
})

runMain(main)

async function checkProjectExist(projectName: string): Promise<boolean> {
  try {
    await access(projectName)
    console.log('Directory exists')
    return true
  }
  catch (error) {
    console.log('Directory does not exist')
    return false
  }
}
