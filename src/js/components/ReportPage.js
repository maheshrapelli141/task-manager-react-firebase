import React, { Component } from 'react';
import Chart from 'chart.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getDaysFromNow } from '../util/DateUtil';

export class ReportPage extends Component {
  componentDidMount() {
    const labels = this.getTaskCategories();
    const data = this.getTasksByCategory();
    const colors = [
      '#E0E0E0',
      '#FFC400',
      '#00E676',
      '#FF6384',
      ...this.getRandomColors(data.length - 4)
    ];

    new Chart(this.canvasEl, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [
          {
            data,
            backgroundColor: colors,
            hoverBackgroundColor: colors
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Tasks due in 7 days'
        },
        animateScale: true,
        animateRotate: true
      }
    });
  }

  getRandomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  getRandomColors(count = 0) {
    const colors = [];
    while (count-- > 0) {
      colors.push(`#${this.getRandomColor()}`);
    }
    return colors;
  }

  getTaskCategories() {
    const { tasks } = this.props;
    return [...new Set(tasks.map(task => task.category))].sort();
  }

  getTasksByCategory() {
    const { tasks } = this.props;
    const taskCategories = this.getTaskCategories();
    return tasks.reduce((accumulator, task) => {
      if (!task.resolved && this.isAlmostDue(task.dueDate)) {
        // update category count
        const categoryIndex = taskCategories.indexOf(task.category);
        accumulator[categoryIndex] = ++accumulator[categoryIndex] || 1;
      }
      return accumulator;
    }, []);
  }

  isAlmostDue(dueDate) {
    return getDaysFromNow(dueDate) <= 7;
  }

  render() {
    return <canvas ref={el => (this.canvasEl = el)} />;
  }
}

ReportPage.defaultProps = {
  tasks: []
};

ReportPage.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({ tasks: state.tasks });

export default connect(
  mapStateToProps,
  null
)(ReportPage);
