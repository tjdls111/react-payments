import React, { useState } from 'react';
import AddCardInfo from './AddCard';
import ChooseCard from './ChooseCard';
import FinishAddingCard from './FinishAddingCard';

const AddCard = () => {
  const [data,setData]=useState()
	const [step, setStep] = useState<'카드정보'|'카드선택'|'생성완료'>('카드정보')

return (
    <div>
      {step==='카드정보' && <AddCardInfo />}
      {step==='카드선택'&& <ChooseCard />}
      {step==='생성완료'&& <FinishAddingCard />}

    </div>
);
}
export default AddCard;