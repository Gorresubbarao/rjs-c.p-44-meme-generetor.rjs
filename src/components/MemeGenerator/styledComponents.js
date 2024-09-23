// Style your components here

import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const ResponsiveContentConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  // alien-self:flex-start;
  color: #35469c;
  font-size: 25px;
  font-family: Roboto;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 45px;
  }
`
export const MemeGeneratorImageAndInputElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

// export const MemeGeneratorImageConatiner = styled.div`
// display:flex;
// flex-direction:column;
// align-items:flex-start;
// `

export const InputElementsConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const LabelAndInputConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 20px;
`
export const LabelElement = styled.label`
  color: #35469c;
  font-size: 15px;
  font-family: Roboto;
  @media (min-width: 768px) {
    font-size: 25px;
  }
`
export const InputElement = styled.input`
  border: 1px solid #d7dfe9;
  border-radius: 7px;
  background-color: transparent;
  courser: pointer;
  outline: none;
  height: 50px;
  padding: 6px 15px;
`
export const SelectedElement = styled.select`
  color: #1e293b;
  font-size: 15px;
  font-family: Roboto;
  font-weight: 700;
  height: 50px;
  padding: 6px 15px;
  width: 100%;
  @media (min-width: 768px) {
    font-size: 25px;
  }
`
export const OptionElement = styled.option`
  color: #1e293b;
  font-size: 15px;
  font-family: Roboto;
  @media (min-width: 768px) {
    font-size: 25px;
  }
`
export const ImageContainer = styled.div`
  background-image: url(${props => props.isMemeBgImageUrl});
  height: 120px;
  width: 120px;
  background-size: cover;
`
export const TopTextHeading = styled.p`
  color: #ffffff;
  font-size: ${props => props.isTextFont}px;
  font-family: Roboto;
  font-weight: 600;
  @media (min-width: 768px) {
    font-size: 25px;
  }
`
export const BottomTextHeading = styled(TopTextHeading)`
  color: #d7dfe9;
`

export const CustomButton = styled.button`
background:#0b69ff
border:none;
outline:none;
curser:pointer;
padding:5px 20px;
color:#ffffff;
font-size:15px;
font-family:Roboto;
margin-bottom:20px;
width:150px
@media sceern and (min-width:768px){
    font-size:25px;}
`

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  @media sceern and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`
