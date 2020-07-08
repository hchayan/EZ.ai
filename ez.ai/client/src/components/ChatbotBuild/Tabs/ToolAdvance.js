import React, { useState } from "react";
import produce from "immer";

const ToolAdvance = ({
  keywordObject,
  mainKeyword,
  onClickBasic,
  setAddFlag,
  setClickedMainInput,
  setKeywordObject,
  setNow,
  setVirtualKeyboard,
  length,
  availableIcon,
   setAvailableIcon,

}) => {
    /* 고급 요소 플랫폼별 이용 가능 여부 */
    const useableInfo = [
        {name : "list", value : [0,0,0]},
        {name : "btn_template", value : [0,0,1]},
        {name : "carousel", value : [0,0,1]},
        {name : "img_carousel", value : [0,0,1]},
        {name : "sticker", value : [0,0,1]},
    ]


  const onClickTool = tool => {
    console.log("onClickTool");
    mainKeyword
      ? setKeywordObject(
          produce(keywordObject, draft => {
            const object = draft.find(t => t.keyword === mainKeyword);
            if(!object.completed){
              if(tool === "list") {
                object.completed = true;
                object.contents.push({
                type: tool,
                id: object.contents.length + 1,
                listContent: {
                  question: "",
                  elem: ["", "", "", "", "", ""],
                  keywordLink: ["", "", "", "", "", ""],
                  contentLen: 2,
                }
                });
              }else {
                object.contents.push({
                type: tool,
                id: object.contents.length + 1,
                content: []
                });
              }
              setAddFlag(true); // 컨텐츠 추가됨 => 스크롤 하단으로 이동
              setVirtualKeyboard(true); // 새 '리스트' 생성 시, Main 에서 바로 하단 바 보이게 함

              /* 사용 가능한 sns 정보 설정 */
               for (let i=0; i<useableInfo.length; i++) {
                   if(useableInfo[i].name === tool) {
                       setAvailableIcon(availableIcon.map((ai,index)=> ({...ai, use : useableInfo[i].value[index] ? false : true})))
                   }
               }
            }else{
              alert('[고정 메뉴] 생성 후, 요소 추가가 안됩니다.\n요소 추가를 원하시면, [고정 메뉴]를 삭제하세요.')
                setAvailableIcon(availableIcon.map((ai,index)=> ({...ai, use : false})))
            }
          })
        )
      : alert("키워드를 선택하세요");
    setClickedMainInput("");




  };
  console.log(keywordObject);
  return (
    <>
      {console.log("Tooladvance")}
      <div
        className="tool-basic tool-basic-text"
        onClick={() =>{        
          onClickTool("list");
          setNow(length + 1);
        }}
      >
          <i className="fas fa-border-all"></i>
        고정 메뉴
      </div>

        <div
            className="tool-basic tool-basic-text"
            onClick={() =>{
                onClickTool("btn_template");
                setNow(length + 1);
            }}
        >
            <i className="fas fa-th-large"></i>
            버튼<br />템플릿
        </div>
        <div
            className="tool-basic tool-basic-text"
            onClick={() =>{
                onClickTool("carousel");
                setNow(length + 1);
            }}
        >
            <i className="far fa-clone"></i>
            슬라이드
        </div>
        <div
            className="tool-basic tool-basic-text"
            onClick={() =>{
                onClickTool("img_carousel");
                setNow(length + 1);
            }}
        >
            <i className="far fa-images"></i>
            이미지<br /> 슬라이드
        </div>

      <div
        className="tool-basic tool-basic-text"
        onClick={() => {
          onClickTool("sticker");
          setNow(length + 1);
        }}
      >
        <i className="far fa-laugh"></i>
        스티커
      </div>
    </>
  );
};

export default ToolAdvance;
