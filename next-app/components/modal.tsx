// 引数の型を定義
type Props = {
    // モーダルを閉じる関数
    onClose: () => void;
    // モーダルの中身
    children: React.ReactNode;
  };
  
  export function Modal({ onClose, children }: Props) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
        <div
          className="absolute top-0 left-0 w-full h-full bg-black/[0.5]"
          // 背景をクリック時に渡されたonCloseを実行
          onClick={onClose}
        />
  
        <div className="relative bg-white rounded-lg p-8 w-1/2 z-10">
          <button
            className="absolute top-5 right-5 text-gray-500 hover:text-black"
            // 閉じるボタンをクリック時に渡されたonCloseを実行
            onClick={onClose}
          >
            閉じる
          </button>
          {children}
        </div>
      </div>
    );
  }
  