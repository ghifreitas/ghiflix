import styled from 'styled-components';

export function Button(props) {
    return <buttton onClick={props.onClick} >{props.text || "OK"}</buttton>
}