import cn from 'classnames'
import s from './ProgressLine.module.css'

interface ProgressLineProps {
  step: string
}

export default function ProgressLine({ step }: ProgressLineProps) {
  const lineClass = cn(s.line, {
    [s.lineHalf]: step === '2',
    [s.lineFull]: step === '3',
  })
  const startDotClass = cn(s.dot, {
    [s.dotCurrent]: step === '1',
    [s.dotChecked]: step === '2' || step === '3',
  })

  const centerDotClass = cn(s.dot, {
    [s.dotCurrent]: step === '2',
    [s.dotChecked]: step === '3',
    [s.dotNotChecked]: step === '1',
  })

  const endDotClass = cn(s.dot, {
    [s.dotCurrent]: step === '3',
    [s.dotNotChecked]: step === '1' || step === '2',
  })
  return (
    <div className={s.content}>
      <div className={lineClass} />
      <div className={s.dotGroup}>
        <div className={startDotClass} />
        <div className={centerDotClass} />
        <div className={endDotClass} />
      </div>
    </div>
  )
}
