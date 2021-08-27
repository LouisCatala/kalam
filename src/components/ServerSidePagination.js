import React from "react";
import MUIDataTable from "mui-datatables";
import { qualificationKeys } from "../config";

import { withRouter } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import SearchBar from "./SearchBar";

const baseURL = process.env.API_URL;

class ServerSidePagination extends React.Component {
  state = {
    page: 0,
    isData: false,
  };

  getStudents = async (page, rowsPerPage) => {
    const { params, dataSetup } = this.props;
    this.setState({
      isData: true,
    });
    const url =
      page.includes(baseURL)
        ? page
        : `${baseURL}students?limit=${rowsPerPage}&page=${page}`;
    const response = await axios.get(url, {
      params,
    });
    const studentData = response.data.data.results.map((student) => {
      return {
        ...student,
        qualification: qualificationKeys[student.qualification],
        studentOwner: "",
        campus: student.campus ? student.campus : null,
        donor: student.studentDonor ? student.studentDonor : null,
      };
    });
    this.setState({
      isData: false,
    });
    dataSetup(studentData);
  };

  changePage = (page, rowsPerPage) => {
    this.getStudents(page, rowsPerPage);
    this.setState({
      page: page,
    });
  };

  getApi = (query, value) => {
    if (query === "gender") {
      this.getStudents(`${baseURL}students?gender=${value === "Female" ? 1 : 2}&limit=250&page=0`);
    }
  };
  render() {
    const { page, isData } = this.state;
    const { data, columns, totalData } = this.props;

    const options = {
      selectableRows: false,
      filter: true,
      search: false,
      serverSide: true,
      filterType: "dropdown",
      onFilterChange: (columnChanged, filterList) => {
        const indexObj = {
          gender: 8,
          stage: 9,
          partnerName: 19,
        };
        const filterValue = filterList[indexObj[columnChanged]];
  
        return this.getApi(columnChanged, filterValue[filterValue.length - 1]);
      },
      responsive: "stacked",
      rowsPerPageOptions: [50, 100, 250],
      count: totalData,
      rowsPerPage: 250,
      page: page,
      onChangeRowsPerPage: (numberOfRows) => {
        this.getStudents(this.state.page, numberOfRows);
      },
      onTableChange: (action, tableState) => {
        const { rowsPerPage, page } = tableState;
        switch (action) {
          case "changePage":
            this.changePage(page, rowsPerPage);
            break;
        }
      },
      textLabels: {
        body: {
          noMatch: this.props.showLoader ? (
            <Loader />
          ) : (
            "Sorry, there is no matching data to display"
          ),
        },
      },
    };
    return (
      <MUIDataTable
        title={<SearchBar searchByName={this.getStudents} />}
        data={isData ? [] : data}
        columns={columns}
        options={options}
      />
    );
  }
}

export default withRouter(ServerSidePagination);
