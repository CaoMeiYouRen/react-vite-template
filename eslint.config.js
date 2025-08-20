import { defineConfig } from 'eslint/config'
import cmyr from 'eslint-config-cmyr/react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default defineConfig([cmyr, reactHooks.configs['recommended-latest'], reactRefresh.configs.recommended])
