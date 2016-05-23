import { serve } from '.'

process.bin = process.title = 'rup'

serve({ projectDir: process.cwd() })
