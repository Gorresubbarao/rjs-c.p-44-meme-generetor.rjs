import {Component} from 'react'

import {
  ResponsiveContentConatiner,
  Heading,
  AppContainer,
  MemeGeneratorImageAndInputElementsContainer,
  InputElementsConatiner,
  LabelAndInputConatiner,
  LabelElement,
  InputElement,
  SelectedElement,
  OptionElement,
  ImageContainer,
  TopTextHeading,
  BottomTextHeading,
  CustomButton,
  FormElement,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
// just addedd this only

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    isMemeGeneator: false,
    memeImageBgUrl: '',
    memeTopText: '',
    memeBottomText: '',
    textFont: '',
  }

  onChangeImageUrl = event => {
    this.setState({
      imageUrl: event.target.value,
    })
  }

  onChangeTopText = event => {
    this.setState({
      topText: event.target.value,
    })
  }

  onChangeBottomText = event => {
    this.setState({
      bottomText: event.target.value,
    })
  }

  onChangeFontSize = event => {
    this.setState({
      fontSize: event.target.value,
    })
  }

  onClickGenerateButton = event => {
    event.preventDefault()
    const {topText, bottomText, imageUrl, fontSize} = this.state

    this.setState({
      isMemeGeneator: true,
      memeBottomText: bottomText,
      textFont: fontSize,
      memeTopText: topText,
      memeImageBgUrl: imageUrl,
    })
  }

  renderMemeGeneratorContent = () => {
    const {memeTopText, memeImageBgUrl, memeBottomText, textFont} = this.state

    console.log(textFont, 'textFont')
    return (
      <ImageContainer isMemeBgImageUrl={memeImageBgUrl} data-testid="meme">
        <TopTextHeading isTextFont={textFont}>{memeTopText}</TopTextHeading>
        <BottomTextHeading isTextFont={textFont}>
          {memeBottomText}
        </BottomTextHeading>
      </ImageContainer>
    )
  }

  render() {
    const {topText, imageUrl, isMemeGeneator, bottomText, fontSize} = this.state

    return (
      <AppContainer>
        <ResponsiveContentConatiner>
          <Heading>Meme Generator</Heading>
          <MemeGeneratorImageAndInputElementsContainer>
            {isMemeGeneator ? this.renderMemeGeneratorContent() : null}

            <FormElement onSubmit={this.onClickGenerateButton}>
              <InputElementsConatiner>
                <LabelAndInputConatiner>
                  <LabelElement htmlFor="imgaeUrl">Image URL</LabelElement>

                  <InputElement
                    id="imgaeUrl"
                    type="text"
                    value={imageUrl}
                    onChange={this.onChangeImageUrl}
                    placeholder="https://assets.ccbp.in/frontend/react-js/nature-img.png"
                  />
                </LabelAndInputConatiner>
                <LabelAndInputConatiner>
                  <LabelElement htmlFor="topText">Top Text</LabelElement>

                  <InputElement
                    id="topText"
                    type="text"
                    value={topText}
                    onChange={this.onChangeTopText}
                    placeholder="I love to weak up early in the morning"
                  />
                </LabelAndInputConatiner>
                <LabelAndInputConatiner>
                  <LabelElement htmlFor="bottomText">Bottom Text</LabelElement>
                  <InputElement
                    id="bottomText"
                    type="text"
                    value={bottomText}
                    onChange={this.onChangeBottomText}
                    placeholder="To see th mrning scenery"
                  />
                </LabelAndInputConatiner>
                <LabelAndInputConatiner>
                  <LabelElement htmlFor="fontSize">Font Size</LabelElement>
                  <SelectedElement
                    id="fontSize"
                    value={fontSize}
                    onChange={this.onChangeFontSize}
                  >
                    {fontSizesOptionsList.map(eachFont => (
                      <OptionElement
                        value={eachFont.optionId}
                        key={eachFont.optionId}
                      >
                        {eachFont.displayText}
                      </OptionElement>
                    ))}
                  </SelectedElement>
                </LabelAndInputConatiner>
              </InputElementsConatiner>
              <CustomButton type="submit">Generate</CustomButton>
            </FormElement>
          </MemeGeneratorImageAndInputElementsContainer>
        </ResponsiveContentConatiner>
      </AppContainer>
    )
  }
}

export default MemeGenerator
