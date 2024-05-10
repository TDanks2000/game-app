import { PlusIcon } from 'lucide-react';
import { FunctionComponent } from 'react';

interface RectangleCardProps {}

const NewGameCard: FunctionComponent<RectangleCardProps> = ({}) => {
  return (
    <div className=" h-[150px] rounded-t-lg p-0 overflow-hidden relative group cursor-pointer">
      {/* BG */}
      <div className="w-full h-full rounded-md bg-gradient-to-tr from-blue-400 to-purple-400" />
      <div className="absolute inset-0 z-20 flex items-center justify-center transition-all opacity-100 bg-gradient-to-tl from-background to-transparent hover:opacity-85">
        <PlusIcon
          fill="white"
          className="size-10"
        />
      </div>
    </div>
  );
};

export default NewGameCard;
