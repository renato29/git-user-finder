import styled from 'styled-components'


export const Wrapper = styled.div`
    display: flex; 
    align-items: flex-start;
`
export const WrapperInfoUser = styled.div`
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 8px;
  height: 200px;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`
export const WrapperStatusCounter = styled.div`
    display: flex; 
    align-items: center;
    div {margin: 8px;
    text-align: center;}
`
export const WrapperUserName = styled.div`
    display: flex; 
    align-items: center;
    margin-top: 8px;
    h3{ margin-right: 8px; }
    a { 
        color: blue; 
        font-size: 14px; 
        font-weight:bold;
    }
`
export const WrapperImg = styled.img`
    border-radius: 50%; 
    width: 200px;
    margin: 16px;
`