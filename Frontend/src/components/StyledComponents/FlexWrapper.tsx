import styled from "styled-components";

type FlexWrapperProps = {
    row?: boolean
    alignItems?: 'center' | 'flex-start' | 'flex-end'
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between'
    gap?: string
}

export const FlexWrapper = styled('div')<FlexWrapperProps>`
  display: flex;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'inherit'};
  gap: ${props => props.gap ? props.gap : ''};
`