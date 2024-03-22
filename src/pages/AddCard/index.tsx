import React, { useState } from 'react'
import AddCardInfo from './AddCard.tsx'
import FinishAddingCard from './FinishAddingCard.tsx'
import { ADD_CARD_STEP_TYPE, PAGE_TYPE } from '../../App.tsx'

export interface CardData {
  numberOne: string
  numberTwo: string
  numberThree: string
  numberFour: string
  expiredMonth: string
  expiredYear: string
  ownerName: string
  CVC: string
  passwordOne: string
  passwordTwo: string
  nickname: string
  companyName: string
}
const AddCard = ({
  setPage,
  step,
  setStep,
  setCardList,
  inputs,
  setInputs,
  currentCardIndex,
  setCurrentCardInputs,
  setCurrentCardIndex,
}: {
  setPage: (step: PAGE_TYPE) => void
  step: ADD_CARD_STEP_TYPE
  setStep: (step: ADD_CARD_STEP_TYPE) => void
  setCardList: React.Dispatch<React.SetStateAction<CardData[]>>
  inputs: CardData
  setInputs: (cardData: CardData) => void
  currentCardIndex?: number
  setCurrentCardInputs?: (cardData: CardData) => void
  setCurrentCardIndex?: (index: number | undefined) => void
}) => {
  const handleSubmit = () => {
    if (currentCardIndex === undefined) {
      setCardList((prev: CardData[]) => [inputs, ...prev])
    } else {
      setCardList((prev: CardData[]) => {
        prev[currentCardIndex] = inputs
        return [...prev]
      })
    }
    setPage('카드목록')
    setStep('카드정보')
    if (setCurrentCardInputs) {
      setCurrentCardInputs({
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
    }
    if (setCurrentCardIndex) {
      setCurrentCardIndex(undefined)
    }
  }

  const handleDelete = () => {
    if (currentCardIndex !== undefined) {
      setCardList((prev: CardData[]) => {
        const current = prev.splice(currentCardIndex, 1)
        return [...current]
      })
    }

    setPage('카드목록')
    setStep('카드정보')

    if (setCurrentCardInputs) {
      setCurrentCardInputs({
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
    }
    if (setCurrentCardIndex) {
      setCurrentCardIndex(undefined)
    }
  }

  return (
    <div>
      {step === '카드정보' && (
        <AddCardInfo
          inputs={inputs}
          setInputs={setInputs}
          handleSubmit={() => {
            setStep('생성완료')
          }}
          handleBack={() => {
            setPage('카드목록')
          }}
        />
      )}
      {/* {step==='카드선택'&& <ChooseCard />} */}
      {step === '생성완료' && (
        <FinishAddingCard
          inputs={inputs}
          setInputs={setInputs}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          currentInputIndex={currentCardIndex}
        />
      )}
    </div>
  )
}
export default AddCard
