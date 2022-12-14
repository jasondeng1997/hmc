// Licensed to Apache Software Foundation(ASF) under one or more contributor
// license agreements. See the NOTICE file distributed with
// this work for additional information regarding copyright
// ownership. Apache Software Foundation(ASF) licenses this file to you under
// the Apache License, Version 2.0 (the "License"); you may
// not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

package main

import (
	"dtstack.com/dtstack/easymatrix/addons/easymonitor/pkg"
	"fmt"
	"os"

	"dtstack.com/dtstack/easymatrix/addons/easymonitor/pkg/base"
	"dtstack.com/dtstack/easymatrix/go-common/log"
	"github.com/urfave/cli"
)

func main() {
	fmt.Println(base.VERSION)
	fmt.Println("Copyright (c) 2022 HuahuiData Inc.")
	base.ConfigureProductVersion(base.VERSION)

	app := cli.NewApp()
	app.Version = base.VERSION
	app.Flags = []cli.Flag{
		cli.StringFlag{
			Name:  "config,c",
			Usage: "config path",
		},
		cli.BoolFlag{
			Name:  "debug",
			Usage: "debug info",
		},
		cli.StringFlag{
			Name:  "kubeconfig,k",
			Usage: "absolute path to the kubeconfig file",
		},
		cli.StringFlag{
			Name:  "master,m",
			Usage: "master url",
		},
	}
	//
	stop := make(chan struct{})
	app.Action = func(ctx *cli.Context) error {
		log.SetDebug(ctx.Bool("debug"))
		if err := pkg.ParseConfig(ctx.String("config"), stop); err != nil {
			return err
		}
		//Start the monitor controller
		if err := pkg.StartDefaultNsMonitorController(ctx.String("master"), ctx.String("kubeconfig"), stop); err != nil {
			return err
		}
		return base.Run()
	}
	defer close(stop)
	err := app.Run(os.Args)
	if err != nil {
		fmt.Fprintf(os.Stderr, "exit with failure: %v\n", err)
	}
}
