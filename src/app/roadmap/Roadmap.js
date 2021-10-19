import React, { Component } from "react";
import Widgets from "../widgets";

import Gantt from 'react-gantt-antd'
import 'react-gantt-antd/lib/css/style.css'

const tasks_a = [
  {
    id: "title1",
    title: "I'm some test task",
    start: new Date('2020-06-01'),
    end: new Date('2020-08-02'),
  }
]

const tasks_b = [
  {
    id: "title1",
    title: "Am Another task",
    start: new Date('2020-07-01'),
    end: new Date('2020-09-02'),
  }
]

// const sub_projects = [
//   {
//     id: "sub_project1",
//     title: "子项目",
//     tasks: tasks_b,
//   }
// ]

const projects = [
  {
    id: "project1",
    title: "A Project",
    tasks: tasks_a,
    // projects: sub_projects,
    isOpen: true,
  }
]

export class Roadmap extends Component {
  render() {
    return (
      <div>
        {/* Pulls data metrics */}
        <Widgets />

        {/* Roadmap timeline */}
        <div className="card roadmap">
          <div className="card-body">
            <div className="toolbar d-flex justify-content-between align-items-center">
              <div className="title">Time Roadmap</div>
              <div className="button-list">
                <button className="btn btn-rounded btn-outline-dark">
                  All
                </button>
                <button className="btn btn-rounded btn-gradient-success">
                  Developer Team
                </button>
                <button className="btn btn-rounded btn-gradient-danger">
                  Design Team
                </button>
                <button className="btn btn-rounded btn-gradient-primary">
                  Management Team
                </button>
                <button className="btn btn-rounded btn-gradient-warning">
                  QA Team
                </button>
              </div>
              <div className="month">
                <div className="icon">
                  <img
                    src={require("../../assets/images/icons/calendar2.svg")}
                    alt="Calendar icon"
                  />
                </div>
                <div className="date">June, 2020</div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="agile-progress"></div>

            {/* Timeline */}
            <div className="timeline">
            <Gantt
              start={new Date('2020-06-01')}
              end={new Date('2020-10-01')}
              now={new Date('2020-7-01')}
              zoom={1}
              projects={projects}
              enableSticky
              scrollToNow='true'
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Roadmap;
