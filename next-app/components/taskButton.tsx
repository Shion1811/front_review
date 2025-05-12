// 引数の型を定義
type Props = {
    // ボタンが押された時に実行する関数
    onClick: () => void;
    // ボタンの中身
    children: React.ReactNode;
  };
  
  export function Button({ onClick, children }: Props) {
    return (
      <button
        type="button"
        className="w-fit border rounded-xl p-3 font-bold"
        // クリック時に渡されたonClick関数を実行する
        onClick={() => onClick()}
      >
        {children}
      </button>
    );
  }
  