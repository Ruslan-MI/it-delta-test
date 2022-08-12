import React, {
  useState,
  useRef,
} from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';

import withLoadingStub from '../../hocs/with-loading-stub/with-loading-stub';
import withOverlay from '../../hocs/with-overlay/with-overlay';

import {
  StoreNameSpace,
} from '../../const';
import {
  composeHOCs,
  getRelativeTime,
} from '../../utils/common';
import {
  sendComment,
} from '../../store/api-actions';

const initialState = {
  comment: '',
};

const GalleryModal = () => {
  const {
    imageItem: {
      id: imageID,
      url,
      comments,
    },
    userData: {
      name: userName,
    }
  } = useSelector((state) => ({
    ...state[StoreNameSpace.DATA],
    ...state[StoreNameSpace.USER],
  }));

  const [
    localState,
    setLocalState,
  ] = useState({
    comment: localStorage.getItem('comment') || initialState.comment,
  });

  const dispatch = useDispatch();

  const textareaRef = useRef();
  const submitButtonRef = useRef();

  const handleFormChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    setLocalState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    localStorage.setItem(name, value);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    dispatch(sendComment({
      id: imageID,
      name: userName,
      comment: localState.comment,
      cb: (result) => {
        if (result.status === 204) {
          setLocalState((prevState) => ({
            ...prevState,
            ...initialState,
          }));

          localStorage.clear();
        }

        // eslint-disable-next-line
        console.log(result);
      },
    }));

  };

  const handleTextareaKeydown = (evt) => {
    if (evt.shiftKey && evt.key === 'Tab') {
      evt.preventDefault();

      submitButtonRef.current.focus();
    }
  };

  const handleSubmitButtonKeydown = (evt) => {
    if (!evt.shiftKey && evt.key === 'Tab') {
      evt.preventDefault();

      textareaRef.current.focus();
    }
  };

  return (
    <section className='gallery-modal'>
      <h2 className='visually-hidden'>Модальное окно</h2>
      <div className='gallery-modal__image-wrapper'>
        <img className='gallery-modal__image' src={url} alt="Фотография" />
      </div>
      {
        !!comments.length &&
        <ul className='gallery-modal__comments-list'>
          {
            comments.map(({
              id: commentID,
              text,
              date,
            }) => (
              <li className='gallery-modal__comments-item' key={commentID}>
                <blockquote className='gallery-modal__comments-text'>{text}</blockquote>
                <p className='gallery-modal__comments-date-wrapper'>
                  <time className='gallery-modal__comments-date' dateTime={new Date(date).toISOString()}>
                    {getRelativeTime(date)}
                  </time>
                </p>
              </li>
            ))
          }
        </ul>
      }
      <form className='gallery-modal__new-comment-form' action='https://echo.htmlacademy.ru' method='POST'
        onChange={handleFormChange} onSubmit={handleFormSubmit}
      >
        <div className='gallery-modal__new-comment-textarea-wrapper'>
          <label className='gallery-modal__new-comment-textarea-label' htmlFor="comment">Comment</label>
          <textarea className='gallery-modal__new-comment-textarea' name="comment" id="comment"
            required value={localState.comment} ref={textareaRef} onKeyDown={handleTextareaKeydown} onChange={() => { }}
          />
          <p className='gallery-modal__new-comment-textarea-description'>Write a few sentences about the photo.</p>
        </div>
        <div className='gallery-modal__buttons-wrapper'>
          <button className='gallery-modal__new-comment-submit-button' type='submit'
            ref={submitButtonRef} onKeyDown={handleSubmitButtonKeydown}
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default composeHOCs(GalleryModal, [
  withOverlay,
  withLoadingStub,
]);
