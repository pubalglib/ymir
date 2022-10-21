import { Col, Popover, Row } from "antd"
import { useSelector } from "umi"

import t from '@/utils/t'
import { states, statesLabel } from '@/constants/dataset'
import s from './iteration.less'
import { Stages } from "@/constants/iteration"
import { useEffect, useState } from "react"
import RenderProgress from "../../../components/common/progress"
import { YesIcon } from '@/components/common/icons'    

function Stage({ stage, end = false, }) {
  const result = useSelector(({ dataset, model }) => {
    const isModel = stage.value === Stages.training
    const res = isModel ? model.model: dataset.dataset
    return { ...res[stage.result]} || {}
  })
  const [state, setState] = useState(-1)

  useEffect(() => {
    const st = typeof result?.state !== 'undefined' ? result.state : stage.state
    setState(st)
  }, [result?.state, stage])

  const currentStage = () => stage.value === stage.current
  const finishStage = () => stage.value < stage.current
  const pendingStage = () => stage.value > stage.current

  const isPending = () => state < 0
  const isReady = () => state === states.READY
  const isValid = () => state === states.VALID
  const isInvalid = () => state === states.INVALID

  const stateClass = `${s.stage} ${currentStage() ? s.current : (finishStage() ? s.finish : s.pending)}`

  const renderCount = () => {
    const content = finishStage() || (currentStage() && isValid()) ? <YesIcon /> : stage.value + 1
    const cls = pendingStage() ? s.pending : (currentStage() ? s.current : s.finish)
    return <span className={`${s.num} ${cls}`}>{content}</span>
  }

  const renderState = () => {
    const pending = 'project.stage.state.pending'
    return !pendingStage() ? 
      (isValid() ?  
        (result.name ?`${result.name} ${result.versionName}` : 
          (end ? null : t('common.done'))) : 
        <span className={s.current}>{isPending() && currentStage() ? t('project.stage.state.pending.current') : t(statesLabel(state))}</span>) : 
      <span className={s.pending}>{t(pending)}</span>
  }

  return (
    <div className={stateClass}>
      <Row className={s.row} align='middle' wrap={false}>
        <Col flex={"30px"}>{renderCount()}</Col>
        <Col>
          <Popover content={RenderProgress(state, result, true)}>{t(stage.act)}</Popover>
        </Col>
        {!end ? <Col className={s.lineContainer} hidden={end} flex={1}><span className={s.line}></span></Col> : null}
      </Row>
      <Row className={s.row}>
        <Col flex={"30px"}>&nbsp;</Col>
        <Col className={s.state} flex={1}>
          {renderState()}
        </Col>
      </Row>
    </div>
  )
}

export default Stage
