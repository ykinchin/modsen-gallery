import { baseTheme } from '@styles/theme'
import styled from 'styled-components'

const InputSectionWrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: 72px;
`

const InputTitle = styled.h1`
	font-size: 64px;
	font-weight: 700;
	color: ${baseTheme.colors.primary};
	text-align: center;

	span {
		color: ${baseTheme.colors.brightHiglight};
	}
`

export { InputSectionWrapper, InputTitle }
