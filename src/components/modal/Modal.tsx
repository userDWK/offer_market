import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ModalmsgProps } from "../../type/interfaces";

const Modal = ({ show, msg, setIsModal }: ModalmsgProps) => {
  const closeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModal(false);
  };

  return (
    <ModalBox show={show}>
      <InnerBox page={msg?.page}>
        {/* {msg.children} */}
        <Text>
          {msg?.type} : {msg?.msg}
        </Text>
        <CloseBtn className="close" onClick={closeModal}>
          닫기
        </CloseBtn>
        <Link to={msg?.page ? `/${msg?.page}` : "/"}>
          <MoveBtn className="close move" onClick={closeModal}>
            {`${msg?.page} 페이지로 이동`}
          </MoveBtn>
        </Link>
      </InnerBox>
    </ModalBox>
  );
};

export default Modal;

const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
  opacity: 0;
  transition: opacity 0.4s ease-in-out !important;
  pointer-events: none;
  overflow: hidden;

  ${({ show }: { show: boolean | undefined }) =>
    show &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;

const InnerBox = styled.div`
  position: fixed;
  top: 1%;
  left: 50%;
  transform: translate(-50%);
  width: 40rem;
  height: 14rem;
  background: rgba(255, 255, 255, 1);
  z-index: 101;
  border: 1px solid black;
  border-radius: 10px;

  ${({ page }: { page: string | undefined }) =>
    page === "" &&
    css`
      .move {
        display: none;
      }
    `}
`;

const Text = styled.span`
  position: absolute;
  top: 20%;
  left: 10%;
  margin-right: 10%;
  line-height: 160%;
  font-size: 1.25rem;
  font-weight: bold;
`;
const CloseBtn = styled.button`
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  width: 6.5rem;
  height: 4.25rem;
  color: black;
  background: rgba(50, 50, 50, 0.2);
  border: 1px solid rgba(20, 20, 20, 0.4);
  border-radius: 3px;
  text-align: center;
  font-size: 1.75rem;
  font-weight: bold;
  line-height: 210%;
  z-index: 102;
  cursor: pointer;
  &:hover {
    background: rgba(100, 150, 255, 1);
  }
`;
const MoveBtn = styled(CloseBtn)`
  right: 8rem;
  width: 16rem;
`;
