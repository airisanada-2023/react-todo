import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid"; //ランダムな文字列生成される

function App() {

  const [todos, setTodos] = useState([]);
  // useState=>変数を管理するためのものフックス
  // todos=>追加していくタスク（オブジェクト）
  // todosが更新されたら画面が再レンダリングされる（更新される）
  // つまり無駄な再レンダリングを防げる
  // setTodos=>todosの中身を更新したいときに使う関数

  const todoNameRef = useRef();
  // useRef使えば簡単に要素（文字列）を取得できる

  const handleAddTodo = () => {
    //タスクを追加する

    const name = todoNameRef.current.value; //入力した文字列取得

    if (name === "") return; //returnはこれ以上は進みませんという意味。空のタスクは作成できない。

    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}]
      // ...prevTodos=>今あるタスクたち
      // {}内=>プラスで追加するタスク
    });

    todoNameRef.current.value = null; //なぜヌル？

  };

  const toggleTodo = (id) => { //idでどのタスクにチェック入れるのか判別
    const newTodos = [...todos]; //todosの中のオブジェクトをnewTodosにコピー。
    const todo = newTodos.find((todo) => todo.id === id); //各todoの中で引数のidと同じidを持つものを探し、const todoのtodoに代入
    todo.completed = !todo.completed;
    setTodos(newTodos); //todoリストの更新
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed); {/* falseのものだけをフィルタリングする（残す） */}
    setTodos(newTodos);
  };

  return (
    <div> {/* このdiv削除するとエラーなる */}
      <TodoList todos={todos} toggleTodo={toggleTodo} /> {/* todosという名前でtodosという変数を渡してあげてね */}
      <input type="text" ref={todoNameRef} /> {/* 入力した文字をtodoNameRef関数で取得 */}
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>★残りのタスク:{todos.filter((todo) => !todo.completed).length}</div> {/* falseのものだけをフィルタリングする（残す） */}
    </div>
  );
};

export default App;
