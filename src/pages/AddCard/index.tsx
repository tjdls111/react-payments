import React, { useState } from 'react'
import AddCardInfo from './AddCard.tsx'
import FinishAddingCard from './FinishAddingCard.tsx'
import { PAGE_TYPE } from '../../App.tsx'

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
  addCardList,
}: {
  setPage: (step: PAGE_TYPE) => void
  addCardList: (newCard: CardData) => void
}) => {
  const [step, setStep] = useState<'카드정보' | '카드선택' | '생성완료'>(
    '카드정보'
  )

  const [inputs, setInputs] = useState<CardData>({
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
          props={{
            numberOne: inputs.numberOne,
            numberTwo: inputs.numberTwo,
            ownerName: inputs.ownerName,
            expiredMonth: inputs.expiredMonth,
            expiredYear: inputs.expiredYear,
            nickname: inputs.nickname,
            companyName: inputs.companyName,
          }}
          handleSubmit={() => {
            addCardList(inputs)
            setPage('카드목록')
          }}
        />
      )}
    </div>
  )
}
export default AddCard
