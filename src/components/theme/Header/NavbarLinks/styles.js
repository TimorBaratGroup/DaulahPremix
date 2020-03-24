import styled from 'styled-components'

export const Wrapper = styled.div`
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }

  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}
			padding: 0rem 2rem 0 0;

			a {
					margin-right: 1.5rem;
					font-size: 1.2vw;

					&:last-child {
						margin-right: unset;
					}

					:hover {
						color: #ffff00;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			vertical-align: 50%;

			a {
					margin-bottom: 1rem;
					padding: 2rem 0;
    				color: #212121;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`
