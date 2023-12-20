import { View } from "@tarojs/components";
import { useEffect, useState } from "react";
import { AtButton, AtForm, AtInput } from "taro-ui";
import NavBar from "~/components/NavBar";
import "./index.scss";

function Index() {
  return (
    <View>
      <NavBar title="编辑资料" />
      <AtForm onSubmit={this.onSubmit.bind(this)}>
        <AtInput
          name="value"
          title="文本"
          type="text"
          placeholder="单行文本"
          value={this.state.value}
          onChange={this.handleChange.bind(this, "value")}
        />
        <AtButton formType="submit">提交</AtButton>
      </AtForm>
    </View>
  );
}

export default Index;
