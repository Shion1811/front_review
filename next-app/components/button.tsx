// TypeScriptで属性の型を定義
type Props = {
  color: string;
  backgroundColor: string;
  // color,backgroundColorはstring型で動的に変更可能
  children: React.ReactNode;
};

export function Button({ color, backgroundColor, children }: Props) {
    return (
      <div>
        <button
          className="w-fit p-3 rounded border-black border-2"
          style={{ color: color, backgroundColor: backgroundColor }}
          // コンポーネントで使いたい時に、color,backgroundColorを指定する
          >
          {children}
        </button>
    </div>
    );
}
