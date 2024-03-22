import React, { useState } from 'react'
import './App.css'
import CardList from './pages/CardList.tsx'
import AddCard, { CardData } from './pages/AddCard/index.tsx'

export type PAGE_TYPE = '카드목록' | '카드추가'
export type ADD_CARD_STEP_TYPE = '카드정보' | '카드선택' | '생성완료'
function App() {
  const [page, setPage] = useState<PAGE_TYPE>('카드목록')
  const [addCardStep, setAddCardStep] = useState<ADD_CARD_STEP_TYPE>('카드정보')
  const defaultCardList = [
    {
      numberOne: '1111',
      numberTwo: '2222',
      numberThree: '3333',
      numberFour: '4444',
      expiredMonth: '12',
      expiredYear: '26',
      ownerName: 'Teddy',
      CVC: '123',
      passwordOne: '1',
      passwordTwo: '2',
      nickname: '엄카',
      companyName: '신한은행',
    },
    {
      numberOne: '1111',
      numberTwo: '2222',
      numberThree: '3333',
      numberFour: '4444',
      expiredMonth: '12',
      expiredYear: '26',
      ownerName: 'Teddy',
      CVC: '123',
      passwordOne: '1',
      passwordTwo: '2',
      nickname: '내 카드',
      companyName: '우리은행',
    },
  ]

  const [cardList, setCardList] = useState(defaultCardList)

  // const addCardList = (newCard: CardData) => {
  //   setCardList([newCard, ...cardList])
  // }
  const [currentCardInputs, setCurrentCardInputs] = useState<CardData>({
    numberOne: '',
    numberTwo: '',
    numberThree: '',
    numberFour: '',
    expiredMonth: '',
    expiredYear: '',
    ownerName: '',
    CVC: '',
    passwordOne: '',
    passwordTwo: '',
    nickname: '',
    companyName: '',
  })
  const [currentCardIndex, setCurrentCardIndex] = useState<number | undefined>(
    undefined
  )

  return (
    <div className="App">
      {page === '카드목록' && (
        <CardList
          setStep={setAddCardStep}
          setPage={setPage}
          cardList={cardList}
          setInputs={setCurrentCardInputs}
          setCurrentCardIndex={setCurrentCardIndex}
        />
      )}
      {page === '카드추가' && (
        <AddCard
          step={addCardStep}
          setStep={setAddCardStep}
          setPage={setPage}
          setCardList={setCardList}
          inputs={currentCardInputs}
          setInputs={setCurrentCardInputs}
          currentCardIndex={currentCardIndex}
          setCurrentCardInputs={setCurrentCardInputs}
          setCurrentCardIndex={setCurrentCardIndex}
        />
      )}
    </div>
  )
}

export default App
