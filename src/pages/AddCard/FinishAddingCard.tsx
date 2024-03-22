import React, { useState } from 'react'
import Card from '../../components/Card.tsx'
import Button from '../../components/Button.tsx'
import Title from '../../components/Title.tsx'
import { CardData } from './index.tsx'

const FinishAddingCard = ({
  inputs,
  setInputs,
  handleDelete,
  handleSubmit,
  currentInputIndex,
}: {
  inputs: CardData
  setInputs: (cardData: CardData) => void
  handleDelete: () => void
  handleSubmit: () => void
  currentInputIndex?: number
}) => {
  return (
    <>
      <div className="root">
        <div className="app flex-column-center">
          <div className="flex-center">
            <Title className="mb-10">카드등록이 완료되었습니다.</Title>
          </div>
          <Card props={inputs} />
          <div className="input-container flex-center w-100">
            <input
              className="input-underline w-75"
              type="text"
              defaultValue={inputs.nickname}
              maxLength={10}
              placeholder="카드 별칭(선택)"
              onChange={(e) =>
                setInputs({ ...inputs, nickname: e.target.value })
              }
            />
          </div>
          <div className="flex-center">
            {currentInputIndex !== undefined && (
              <Button onClick={handleDelete}>삭제</Button>
            )}
            <Button onClick={handleSubmit}>확인</Button>
          </div>
        </div>
      </div>
    </>
  )
}
export default FinishAddingCard
