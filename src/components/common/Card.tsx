import React from 'react'

export interface CardInputProps {
  numberOne: string
  numberTwo: string
  ownerName: string
  expiredMonth: string
  expiredYear: string
  companyName?: string
  nickname: string
}

const Card = ({ props }: { props: CardInputProps }) => {
  const {
    nickname,
    numberOne,
    numberTwo,
    ownerName,
    expiredMonth,
    expiredYear,
    companyName,
  } = props

  return (
    <>
      <div className="card-box">
        <div className="big-card">
          <div className="card-top">
            <span className="card-text__big">{companyName}</span>
          </div>
          <div className="card-middle">
            <div className="big-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className="card-text__big">
                {numberOne} - {numberTwo} - oooo - oooo
              </span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text__big">{ownerName}</span>
              <span className="card-text__big">
                {expiredMonth}/ {expiredYear}
              </span>
            </div>
          </div>
        </div>
      </div>
      <span className="card-nickname">{nickname}</span>
    </>
  )
}
export default Card
