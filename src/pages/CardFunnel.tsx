import React, { useState } from 'react'
import AddCard, { CardData } from '../components/RegisterCard.tsx'
import CardList from '../components/CardList.tsx'
import { ADD_CARD_STEP_TYPE, PAGE_TYPE } from '../types/card.ts'

function CardFunnel() {
  const [page, setPage] = useState<PAGE_TYPE>('카드목록')
  const [addCardStep, setAddCardStep] =
    useState<ADD_CARD_STEP_TYPE>('카드정보입력')
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
    <>
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
    </>
  )
}

export default CardFunnel
