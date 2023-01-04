import styled from "styled-components";

type FlexWrapperProps = {
    row?: boolean
    alignItems?: 'center' | 'flex-start' | 'flex-end'

}

export const FlexWrapper = styled('div')<FlexWrapperProps>`
  display: flex;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
`