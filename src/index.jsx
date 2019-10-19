import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class Progress extends Component {

    isEmpty(val) {
        return val === undefined || val === null;
    }

    constructor(props) {
        super(props);

        const configure = {
            viewPortWidth: 100,
            viewPortHeight: 100,
            circleStrokeWidth: 5

        }
        if(!this.isEmpty(this.props.strokeWidth)) {
            configure.circleStrokeWidth = this.props.strokeWidth;
        }
        this.state = {
            circle: {
                cx: configure.viewPortWidth / 2,
                cy: configure.viewPortHeight / 2,
                r: configure.viewPortWidth / 2 - configure.circleStrokeWidth,
                strokeWidth: configure.circleStrokeWidth
            },
            svg: {
                width: this.props.width || configure.viewPortWidth,
                height: this.props.height || configure.viewPortHeight,
                viewPortWidth: configure.viewPortWidth,
                viewPortHeight: configure.viewPortHeight,
            },
            strokeDasharray: '0 1000'
        }
    }


    getViewBox() {
        return `0 0 ${this.state.svg.viewPortWidth} ${this.state.svg.viewPortHeight}`;
    }

    getPercentage() {
        const number = this.props.number > 100 ? 100 : (this.props.number < 0 ? 0 : this.props.number);
        return number;
    }

    getStrokeDasharray = () => {
        const percentage = this.getPercentage();
        const perimeter = Math.PI * 2 * this.state.circle.r;
        const path = Math.floor(perimeter * percentage / 100);

        const fPerimeter = Math.ceil(perimeter);
        setTimeout(() => {
            this.setState({
                ...this.state,
                strokeDasharray: `${path} ${fPerimeter}`
            });
        });
    }

    render() {
        this.getStrokeDasharray();
        return (
            <>
                <div className="my-progress-container">
                    <div>
                        <svg className="my-progress-bar" viewBox={this.getViewBox()} width={this.state.svg.width} height={this.state.svg.height}>
                            <circle className="circle-bg" {...this.state.circle}></circle>
                            <circle className="circle-path" {...this.state.circle} style={{ 'strokeDasharray': this.state.strokeDasharray, 'stroke': this.props.strokeColor}}></circle>
                            {
                                this.props.isTextShown
                                &&
                                <text className="progress-text" x={this.state.circle.cx} y={this.state.circle.cy}>{this.getPercentage()} %</text>
                            }
                        </svg>
                    </div>
                    <div className="my-progress-content">
                        {this.props.children}
                    </div>
                </div>
            </>
        );
    }
}

Progress.propTypes = {
    number: PropTypes.number.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    isTextShown: PropTypes.bool,
    strokeColor: PropTypes.string
}

Progress.defaultProps = {
    isTextShown: true,
    strokeColor: '#5116d0'
};

export default Progress;