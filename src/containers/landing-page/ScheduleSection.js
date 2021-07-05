import schedule from '../../data/schedule.json';

const { columns, columnsNames, data } = schedule;

function ScheduleItem(props) {
  const { item } = props;

  return (<tr>
    {columns.map((column) => (<td>{item[column]}</td>))}
  </tr>);
}

function Schedule() {
  const tableHeaders = columns.map((column) => (<th>{columnsNames[column]}</th>));

  return (
    <section className="section">
      <h2 className="title">Programação</h2>

      <div className="container is-widescreen">
        <table className="table is-striped is-centered">
          <thead>{tableHeaders}</thead>
          <tfoot>{tableHeaders}</tfoot>
          <tbody>
            {data.map((scheduleItem) => <ScheduleItem item={scheduleItem} />)}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Schedule;
