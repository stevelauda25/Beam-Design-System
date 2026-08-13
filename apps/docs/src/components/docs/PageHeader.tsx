import type { ReactNode } from 'react';

interface Props {
  title: string;
  description?: ReactNode;
}

export function PageHeader({ title, description }: Props) {
  return (
    <div className="page-header flex h-[52px] flex-col gap-0.5 border-b border-black/10 pb-[13px] text-xs leading-[18px]">
      <h1 className="font-normal text-[#0a0a0a]">
        {title}
      </h1>
      {description && (
        <p className="font-normal text-[#525252]">{description}</p>
      )}
    </div>
  );
}
