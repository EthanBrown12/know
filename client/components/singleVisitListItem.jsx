import React from 'react';

function SingleVisitListItem(props) {
  const test = props.test;
  const testName = test[0];
  const first = testName[0].charAt(0);
  const upper = first.toUpperCase();
  const testNameUpper = upper + testName[0].slice(1);
  const result = props.result;
  return (
    <div className='visit d-flex justify-content-between align-items-center mt-4 mb-4'>
      <div>
        {testNameUpper}
      </div>
      <div>
        <div>
          {result}
        </div>
      </div>
    </div>
  );
}

export default SingleVisitListItem;