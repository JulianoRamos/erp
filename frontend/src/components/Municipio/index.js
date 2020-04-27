import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

import { connect } from "react-redux";

const Municipio = ({ municipios }) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    if (active) {
      setOptions(municipios);
    }

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="municipio-search"
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.nome === value.nome}
      getOptionLabel={(option) => option.nome}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          margin="dense"
          label="Município"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

class MyMunicipio extends Component {
  componentDidMount() {
    this.props.fetchMunicipios();
  }

  render() {
    return <Municipio municipios={this.props.municipios} />;
  }
}

const mapStateToProps = (state) => ({
  municipios: state.municipio.municipios,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMunicipios: dispatch.municipio.fetchMunicipios,
});

export default connect(mapStateToProps, mapDispatchToProps)(MyMunicipio);
