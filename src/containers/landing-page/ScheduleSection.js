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
      author: {
        name: item.assignee,
        shortBio: getPerson(item.assignee).shortBio,
      },
      day: item.day,
      hour: item.hour,
      linkedinUrl: getPerson(item.assignee).linkedinUrl,
      imgPath: getPerson(item.assignee).imgPath,
      closeDialog: () => setModalProps(null),
    }

    return (
      <tr
        className="schedule-item"
        onClick={() => setModalProps(scheduleProps)}
      >
        {columns.map((column, index) => (
          <td key={index}>{item[column]}</td>
        ))}
      </tr>
    )
  }

  return (
    <section className="section">
      <h2 className="title">Programação</h2>
      {modalProps && <ScheduleDialog {...modalProps} />}

      <div className="container is-widescreen">
        <table className="table is-striped is-centered">
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
