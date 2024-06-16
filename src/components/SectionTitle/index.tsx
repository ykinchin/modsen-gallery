import { Subtitle, Title, TitleWrapper } from './styled'

type Props = {
	title: string
	subtitle?: string
}

export const SectionTitle = ({ title, subtitle }: Props) => {
	return (
		<TitleWrapper>
			<Title>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
		</TitleWrapper>
	)
}
