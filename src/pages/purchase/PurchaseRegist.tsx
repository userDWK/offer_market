import { useState, useRef } from "react";
import styled, { css } from "styled-components";
import TextForm, { Label } from "../../components/input/TextForm";
import { shadow, theme } from "../../styles/styleUtil";
import empty from "../../assets/images/empty.png";
import Modal from "../../components/modal/Modal";
import { storageService } from "../../fbase";

const PurchaseRegist = () => {
  const [purchaseItem, setPurchaseItem] = useState({});
  const [purchaseImg, setPurchaseImg] = useState("");
  const [etcToggle, setEtcToggle] = useState(false);
  const [bundleToggle, setBundleToggle] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [msg, setMsg] = useState({});

  const canvasRef = useRef<HTMLCanvasElement>();

    const createImg = () => {
      const img = new Image();
      img.src = purchaseImg;
      return new Promise((resolve, reject) => {
        img.onload = () => resolve(img);
        img.onerror = (e) => reject(e);
      });
    };

    const resizeImg = async () => {
      canvasRef.current.width = 250;
      canvasRef.current.height = 250;
      const ctx = canvas.getContext("2d");
      const img = await createImg();
      const scale = Math.min(
        canvas.width / img.width,
        canvas.height / img.height
      );
      let x = canvas.width / 2 - (img.width / 2) * scale;
      let y = canvas.height / 2 - (img.height / 2) * scale;
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      setImgToggle(true);
      return new Promise((resolve) => {
        canvas.toBlob((blob) => {
          resolve(blob);
        });
      });
    };

  const getBlob = () => {
    const blob = await resizeImg();
    const photoName = `images/product/purchase/${Date.now()}.jpeg`;
    const imageRef = storageService.ref().child(photoName);
    const uploadTask = imageRef.put(blob, {
      contentType: "image/jpeg",
    });
    uploadTask.on(
      "upload",
      (snapshot) => {
        let progress = (snapshot.totalBytes - snapshot.bytesTransferred) * 100;
        // updateLocalStorage(null);
        console.log(progress);
      },
      (e) => {
        switch (e.code) {
          case "storage/unauthorized":
            setMsg({
              type: "Error",
              msg: "허가 되지 않은 경로 입니다",
              page: undefined,
            });
            setIsModal(true);
            break;
          case "storage/unknown":
            console.error(e.serverResponse);
            break;
        }
      },
      async () => {
        try {
          const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
          console.log("다운로드 URL : ", downloadURL);
        }
  }
  }

  const registPurchaseItems = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getBlob();
  };

  const handleInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPurchaseItem({
      ...purchaseItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.files as FileList;
    const file = target[0];

    if (!file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      const target = e.target as any;
      setPurchaseImg(target.result);
    };
  };

  const handleInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // setToggle((prev) => !prev);
  };

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    const id = target.id;
    if (id === "etcBtn") setEtcToggle(!etcToggle);
    else if (id === "bundleBtn") setBundleToggle(!bundleToggle);
  };

  return (
    <>
      <Modal show={isModal} msg={msg} setIsModal={setIsModal} />
      <RegistBox>
        <Row>
          <Form onSubmit={registPurchaseItems}>
            <TextForm
              inputKey="inputs"
              handleImg={handleImg}
              handleInputData={handleInputData}
            />

            <Figure>
              <ItemImg
                className="hide"
                //   className={(imgToggle && "hide").toString()}
                src={
                  purchaseImg ? purchaseImg : empty
                  // location ? empty : selectProduct.img
                }
              />
              <Canvas ref={canvasRef} />
            </Figure>
            <EtcViewBtn id="etcBtn" onClick={handleToggle}>
              기타 상세 정보 <span>{etcToggle ? "Λ" : "V"}</span>
            </EtcViewBtn>
            <EtcBox etcToggle={etcToggle}>
              <TextForm
                inputKey={"etcInputs"}
                handleImg={handleImg}
                handleInputData={handleInputData}
              />
              <EtcLabel>기타 정보</EtcLabel>
              <EtcText></EtcText>
            </EtcBox>
            <RegistBtn>상품 등록 하기</RegistBtn>
          </Form>
        </Row>
      </RegistBox>
    </>
  );
};

export default PurchaseRegist;

const RegistBox = styled.section`
  position: relative;
`;
const Row = styled.div`
  margin: 10rem auto;
  width: 60rem;
  min-height: 80rem;
  border: solid 1px ${theme("gray")};
`;
const Form = styled.form`
  width: 90%;
  margin: 0 auto;
`;

const Figure = styled.figure`
  position: relative;
  text-align: center;
  margin-top: 2rem auto;
`;
const ItemImg = styled.img`
  min-width: 12rem;
  max-width: 25rem;
  min-height: 12rem;
  max-height: 25rem;
  /* .hide {
      display : none;
    } */
`;
const Canvas = styled.canvas``;

const EtcViewBtn = styled.button`
  position: relative;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  height: 3.75rem;
  margin-bottom: 3rem;
  background: ${theme("lightgray")};
  border: solid 1px #ccc;
  line-height: 180%;
  font-size: 1.5rem;
  font-weight: 300;
  cursor: pointer;
  span {
    font-size: 1.75rem;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const EtcBox = styled.div`
  display: none;
  ${({ etcToggle }: { etcToggle: boolean }) =>
    etcToggle &&
    css`
      display: block;
      position: relative;
      width: 100%;
      margin: 0 auto;
      padding: 3rem;
      background: rgba(225, 250, 255, 1);
      border-radius: 1rem;
      overflow-x: visible;
    `}
`;

const EtcLabel = styled(Label)`
  margin: 3rem 0 1.25rem;
`;
const EtcText = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 1rem 0 0 2rem;
  background: white;
  border: 1px solid ${theme("gray")};
  border-radius: 4px;
  resize: none;
`;

const RegistBtn = styled.button`
  position: relative;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  height: 4rem;
  margin: 5rem auto;
  color: #111;
  background: ${theme("orange")};
  border: solid 1px ${theme("gray")};
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${theme("darkorange")};
  }

  &:active {
    color: white;
    ${shadow(1)};
  }
`;
