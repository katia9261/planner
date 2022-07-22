import React from 'react';
import styles from './Tag.css';
import cn from 'classnames';

function setColorTag(tag) {
  const colotOfTags = {
    work: '#fda3b4',
    person: '#f5b1ff',
    other: '#a699ff',
  };

  switch (tag) {
    case 'work':
      return colotOfTags.work;
    case 'person':
      return colotOfTags.person;
    default:
      return colotOfTags.other;
  }
}

export default function Tag({ tags }) {
	
  return (
    <div className={cn('tagContainer')}>
      <div className={cn('tag')} style={{ backgroundColor: setColorTag(tags) }}>
        {tags}
      </div>
    </div>
  );
}
