import { Paper, rgba } from '@mantine/core'
import { style } from '@vanilla-extract/css'
import { vanilla } from './theme'

export const wrapContent = style({
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
})

export const truncate = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const glassBackground =
  style({
    background: rgba('#FFFFFF', 0.5),
    backdropFilter: `blur(2px)`,

    selectors: {
      [vanilla.darkSelector]: {
        backdropFilter: `blur(4px)`,
        background: rgba(vanilla.colors.black, 0.5),
      },
    },
  })
