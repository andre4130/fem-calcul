'use client';
import { Card } from '@/components/ui/card';
import React, { useState } from 'react';
import { PublicFundingResearchProps } from '../(config)/publicFundingResearch';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { PlusCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function ResearchCard({ researchInfo }: { researchInfo: PublicFundingResearchProps }) {
  const ResearchDialogDataRow = ({ title, value }: { title: string; value: string | number }) => (
    <div className="flex w-100 my-2">
      <h6 className="font-semibold whitespace-nowrap min-w-[120px]">{title}</h6>
      <div className="pl-2">{value}</div>
    </div>
  );

  return (
    <>
      <Card className="h-[300px] max-h-[300px] p-4 flex flex-col justify-center align-middle relative hover:bg-slate-100 transition-all ease-in">
        <h5 className="text-center">{researchInfo.title}</h5>
        <Dialog>
          <DialogTrigger asChild>
            <button className="absolute bottom-[30px] right-[12px] h-1">
              <PlusCircle />
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-2 mr-2">{researchInfo.title}</DialogTitle>
              <Separator />
              <DialogDescription className="pt-2">
                <ResearchDialogDataRow title="Funded by:" value={researchInfo.fundedBy} />
                <ResearchDialogDataRow title="Client:" value={researchInfo.client} />
                <ResearchDialogDataRow title="Research period:" value={researchInfo.researchPeriod} />
                <ResearchDialogDataRow title="Position:" value={researchInfo.position} />
                <ResearchDialogDataRow title="Participants:" value={researchInfo.participants.join(', ')} />
                {researchInfo.developedAt && (
                  <ResearchDialogDataRow title="Developed at:" value={researchInfo.developedAt} />
                )}
                {researchInfo.goalsAndTasks && (
                  <ResearchDialogDataRow title="Goals and tasks:" value={researchInfo.goalsAndTasks} />
                )}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </Card>
    </>
  );
}
