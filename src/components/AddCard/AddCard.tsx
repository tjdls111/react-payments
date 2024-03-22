import React from 'react'
import NumberInput from '../common/CardNumberInput.tsx'
import DateInput from '../common/DateInput.tsx'
import Input from '../common/Input.tsx'
import Button from '../common/Button.tsx'
import Title from '../common/Title.tsx'
import IconButton from '../common/IconButton.tsx'
import { CardData } from '../RegisterCard.tsx'
import useAddCard, { numeric_only_regex } from './useAddCard.ts'

const CARD_ONE_SECTION_NUMBER_LENGTH = 4

const AddCardInfo = ({
  handleSubmit,
  inputs,
  setInputs,
  handleBack,
}: {
  handleSubmit: () => void
  inputs: CardData
  setInputs: (cardData: CardData) => void
  handleBack: () => void
}) => {
  const { handleChangeExpiredMonth, handleChangeExpiredYear } = useAddCard({
    inputs,
    setInputs,
  })

  return (
    <>
      <div className="root">
        <div className="app">
          <Title>
            <IconButton
              onClick={handleBack}
              file={'/icons/back.svg'}
            ></IconButton>
            카드 추가
          </Title>
          <div className="card-box">
            <div className="empty-card">
              <div className="card-top"></div>
              <div className="card-middle">
                <div className="small-card__chip"></div>
              </div>
              <div className="card-bottom">
                <span className="card-text">
                  {inputs.numberOne}
                  {inputs.numberOne && '-'}
                  {inputs.numberTwo}
                  {inputs.numberTwo && '-'}
                  {'*'.repeat(inputs.numberThree.length)}
                  {inputs.numberThree && '-'}
                  {'*'.repeat(inputs.numberFour.length)}
                </span>
                <div className="card-bottom__info">
                  <span className="card-text">{inputs.ownerName}</span>
                  <span className="card-text">
                    {inputs.expiredMonth} / {inputs.expiredYear}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">카드 번호</span>
            <NumberInput
              divider="-"
              inputs={[
                {
                  type: 'text',
                  maxLength: CARD_ONE_SECTION_NUMBER_LENGTH,
                  value: inputs.numberOne,
                  onChange: (e) => {
                    if (numeric_only_regex.test(e.target.value)) {
                      setInputs({ ...inputs, numberOne: e.target.value })
                    }
                  },
                },
                {
                  type: 'text',
                  maxLength: CARD_ONE_SECTION_NUMBER_LENGTH,
                  value: inputs.numberTwo,
                  onChange: (e) => {
                    if (numeric_only_regex.test(e.target.value)) {
                      setInputs({ ...inputs, numberTwo: e.target.value })
                    }
                  },
                },
                {
                  type: 'password',
                  maxLength: CARD_ONE_SECTION_NUMBER_LENGTH,
                  value: inputs.numberThree,
                  onChange: (e) => {
                    if (numeric_only_regex.test(e.target.value)) {
                      setInputs({ ...inputs, numberThree: e.target.value })
                    }
                  },
                },
                {
                  type: 'password',
                  maxLength: CARD_ONE_SECTION_NUMBER_LENGTH,
                  value: inputs.numberFour,
                  onChange: (e) => {
                    if (numeric_only_regex.test(e.target.value)) {
                      setInputs({ ...inputs, numberFour: e.target.value })
                    }
                  },
                },
              ]}
            />
          </div>
          <div className="input-container">
            <span className="input-title">만료일</span>
            <DateInput
              divider="/"
              inputs={[
                {
                  value: inputs.expiredMonth,
                  onChange: handleChangeExpiredMonth,
                  placeholder: 'MM',
                  maxLength: 2,
                },
                {
                  value: inputs.expiredYear,
                  onChange: handleChangeExpiredYear,
                  placeholder: 'YY',
                  maxLength: 2,
                },
              ]}
            />
          </div>
          <Input
            label="카드 소유자 이름(선택)"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength={30}
            value={inputs.ownerName}
            onChange={(e) => {
              setInputs({ ...inputs, ownerName: e.target.value })
            }}
            isShowLength
          ></Input>
          <Input
            label="보안코드(CVC/CVV)"
            type="password"
            maxLength={3}
            widthSize="md"
            value={inputs.CVC}
            onChange={(e) => {
              if (numeric_only_regex.test(e.target.value)) {
                setInputs({ ...inputs, CVC: e.target.value })
              }
            }}
          />
          <div className="input-container">
            <span className="input-title">카드 비밀번호</span>
            <div className="flex-center gap-CARD_ONE_SECTION_NUMBER_LENGTH">
              <Input
                type="password"
                maxLength={1}
                widthSize="sm"
                value={inputs.passwordOne}
                onChange={(e) => {
                  setInputs({ ...inputs, passwordOne: e.target.value })
                }}
              />
              <Input
                type="password"
                maxLength={1}
                widthSize="sm"
                value={inputs.passwordTwo}
                onChange={(e) => {
                  setInputs({ ...inputs, passwordTwo: e.target.value })
                }}
              />
              <span>*</span>
              <span>*</span>
            </div>
            <Button onClick={handleSubmit}>다음</Button>
          </div>
        </div>
      </div>
    </>
  )
}
export default AddCardInfo
