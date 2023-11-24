import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ChevronUp } from 'lucide-react';

const Accordingvalue = ({ id, title, info }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="acoordin">
      <div className="value-contain">
        <div>
          <button onClick={() => setShowMore(false)}>
            <ChevronUp color="#0bcdf4" />
          </button>
        </div>
        <div className="title">
          <h4>{title}</h4>
        </div>

        <div>
          <button onClick={() => setShowMore(!false)}>
            <ChevronDown color="#0bcdf4" />
          </button>
        </div>
      </div>
      <div className="acoordin-toggle">
        <p>{showMore && info}</p>
      </div>
    </div>
    //
  );
};

export default Accordingvalue;
