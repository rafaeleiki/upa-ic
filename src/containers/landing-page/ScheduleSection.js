import { useState } from 'react'
import ScheduleDialog from '../../components/ScheduleDialog'
import schedule from '../../data/schedule.json'
import { getPerson } from '../../utils/people'

import './ScheduleSection.css'

const { columns, columnsNames, data } = schedule

function Schedule() {
  const [modalProps, setModalProps] = useState(null)

  const tableHeaders = columns.map((column, index) => (
    <th key={index}>{columnsNames[column]}</th>
  ))

  const renderScheduleItem = (item) => {
    const scheduleProps = {
      title: item.theme,
      description: item.description,
      author: item.assignee.map((speaker) => {
        const speakerDetails = getPerson(speaker)
        if (speakerDetails !== undefined) {
          return {
            name: speaker,
            shortBio: speakerDetails.shortBio,
            linkedinUrl: speakerDetails.linkedinUrl,
            imgPath: speakerDetails.imgPath,
          }
        }
        return undefined
      }),
      day: item.day,
      hour: item.hour,
      closeDialog: () => setModalProps(null),
    }

    return (
      <tr
        className="schedule-item"
        onClick={() => setModalProps(scheduleProps)}
      >
        {columns.map((column, index) => {
          let cellData = item[column]
          if (column === 'assignee') {
            cellData = cellData.join(', ').replace(/, ([^,]*)$/, ' e $1')
          }
          return <td key={index}>{cellData}</td>
        })}
      </tr>
    )
  }

  return (
    <section className="section">
      <h2 className="title">Programação</h2>
      {modalProps && <ScheduleDialog {...modalProps} />}

      <div className="container is-widescreen overflow-auto">
        <table className="table is-striped has-text-left">
          <thead>
            <tr>{tableHeaders}</tr>
          </thead>
          <tfoot>
            <tr>{tableHeaders}</tr>
          </tfoot>
          <tbody>
            {data.map((scheduleItem) => renderScheduleItem(scheduleItem))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Schedule
