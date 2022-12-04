import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得した後、値を空にする
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除する
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストにtodoを追加する
const createIncompleteList = (text) => {
  //divタグを作成する
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグを作成する
  const li = document.createElement("li");
  li.innerText = text;

  //ボタンを作成する
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);
    //完了したtodoリストに追加する
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    //divの子要素を全て削除する
    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //戻す対象のタスクの親tagを削除する
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(addTarget);

    //完了ボタンが押された場合、未完了リストからtodoを削除する
    /*
    const completeTarget = completeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(completeTarget);
    */
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親tagを未完了リストから削除
    /*
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
    */
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divの子要素に各要素に設定する
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//追加ボタンを押した場合に、todo追加イベントを呼び出す
document //html要素全てを取得する
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
