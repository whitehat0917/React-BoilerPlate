import styled from 'styled-components';
import { Box } from 'rebass/styled-components'
import { Link as RouterLink } from 'react-router-dom'
import theme from '../theme';

export const FlexLayout = styled.div`
    width: ${props => props.width || "auto"};
    max-width: ${props => props.maxWidth || "auto"};
    height: ${props => props.height || "auto"};
    display: flex;
    position: ${props => props.position || "0"};
    top: ${props => props.top || "auto"};
    bottom: ${props => props.bottom || "auto"};
    left: ${props => props.left || "auto"};
    right: ${props => props.right || "auto"};
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "center"};
    align-items: ${props => props.align || "center"};
    padding: ${props => props.padding || "0"};
    margin: ${props => props.margin || "0"};
    border-top: ${props => props.borderTop || "0"};
    border-bottom: ${props => props.borderBottom || "0"};
    background-color: ${props => props.backgroundColor || "transparent"};
    border-radius: ${props => props.borderRadius || 0};
    flex-wrap: ${props => props.wrap || 'wrap'};
`;
export const ChumHumText = styled.p`
    width: ${props => props.width || "auto"};
    margin: ${props => props.margin || "0"};
    padding: ${props => props.padding || "0"};
    font-size: ${props => props.fontSize || "1rem"};
    font-weight: ${props => props.fontWeight || "bold"};
    line-height: ${props => props.lineHeight || "1.5rem"};
    color: ${props => props.color || "white"};
    max-width: ${props => props.maxWidth || "auto"};
    text-align: ${props => props.align || "center"};
    white-space: ${props => props.whiteSpace || "none"};
    text-overflow: ${props => props.textOverflow || "none"};
    overflow: ${props => props.overflow || "none"};
    cursor: ${props => props.cursor || 'default'};
`;