// 引数の型を定義
type Props = {
    // ボタンが押された時に実行する関数
    onClick: () => void;
    // ボタンが押された時に実行する関数
    onKeyDown?: (e: React.KeyboardEvent) => void;
    // ボタンの中身
    children: React.ReactNode;
  };
  
  export function Button({ onClick, onKeyDown, children }: Props) {
    return (
      <button
        type="button"
        className="w-fit border rounded-xl p-3 font-bold"
        // クリック時に渡されたonClick関数を実行する
        onClick={() => onClick()}
        onKeyDown={onKeyDown}
      >
        {children}
      </button>
    );
  }
  