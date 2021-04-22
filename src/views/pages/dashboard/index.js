import React, { useState, useEffect } from 'react'
import { Row, Col, Progress } from 'reactstrap';
import { connect } from "react-redux";
import { setTokenData } from "../../../redux/actions";
import { FlexLayout, ChumHumText } from '../../../components/styles';

const Dashboard = ({ tokenData, setTokenData }) => {

  useEffect(() => {

  }, []);

  return (
    <div>
      <Row>
        
      </Row>
    </div>
  )
}

const mapStateToProps = ({ common }) => {
  const { tokenData } = common;
  return { tokenData };
};

const mapDispatchToProp = (dispatch) => {
  return {
    setTokenData: (data) => dispatch(setTokenData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Dashboard);
