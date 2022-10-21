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

// Code generated by protoc-gen-go. DO NOT EDIT.
// source: filetansfer_service.proto

package proto

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type DownloadRequest struct {
	Path                 string   `protobuf:"bytes,1,opt,name=path,proto3" json:"path,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DownloadRequest) Reset()         { *m = DownloadRequest{} }
func (m *DownloadRequest) String() string { return proto.CompactTextString(m) }
func (*DownloadRequest) ProtoMessage()    {}
func (*DownloadRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_99eb70fcb0bd5354, []int{0}
}

func (m *DownloadRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DownloadRequest.Unmarshal(m, b)
}
func (m *DownloadRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DownloadRequest.Marshal(b, m, deterministic)
}
func (m *DownloadRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DownloadRequest.Merge(m, src)
}
func (m *DownloadRequest) XXX_Size() int {
	return xxx_messageInfo_DownloadRequest.Size(m)
}
func (m *DownloadRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DownloadRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DownloadRequest proto.InternalMessageInfo

func (m *DownloadRequest) GetPath() string {
	if m != nil {
		return m.Path
	}
	return ""
}

type DownloadResponse struct {
	Data                 []byte   `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DownloadResponse) Reset()         { *m = DownloadResponse{} }
func (m *DownloadResponse) String() string { return proto.CompactTextString(m) }
func (*DownloadResponse) ProtoMessage()    {}
func (*DownloadResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_99eb70fcb0bd5354, []int{1}
}

func (m *DownloadResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DownloadResponse.Unmarshal(m, b)
}
func (m *DownloadResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DownloadResponse.Marshal(b, m, deterministic)
}
func (m *DownloadResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DownloadResponse.Merge(m, src)
}
func (m *DownloadResponse) XXX_Size() int {
	return xxx_messageInfo_DownloadResponse.Size(m)
}
func (m *DownloadResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_DownloadResponse.DiscardUnknown(m)
}

var xxx_messageInfo_DownloadResponse proto.InternalMessageInfo

func (m *DownloadResponse) GetData() []byte {
	if m != nil {
		return m.Data
	}
	return nil
}

type PreviewRequest struct {
	Path                 string   `protobuf:"bytes,1,opt,name=path,proto3" json:"path,omitempty"`
	Action               string   `protobuf:"bytes,2,opt,name=action,proto3" json:"action,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PreviewRequest) Reset()         { *m = PreviewRequest{} }
func (m *PreviewRequest) String() string { return proto.CompactTextString(m) }
func (*PreviewRequest) ProtoMessage()    {}
func (*PreviewRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_99eb70fcb0bd5354, []int{2}
}

func (m *PreviewRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PreviewRequest.Unmarshal(m, b)
}
func (m *PreviewRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PreviewRequest.Marshal(b, m, deterministic)
}
func (m *PreviewRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PreviewRequest.Merge(m, src)
}
func (m *PreviewRequest) XXX_Size() int {
	return xxx_messageInfo_PreviewRequest.Size(m)
}
func (m *PreviewRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_PreviewRequest.DiscardUnknown(m)
}

var xxx_messageInfo_PreviewRequest proto.InternalMessageInfo

func (m *PreviewRequest) GetPath() string {
	if m != nil {
		return m.Path
	}
	return ""
}

func (m *PreviewRequest) GetAction() string {
	if m != nil {
		return m.Action
	}
	return ""
}

type PreviewResponse struct {
	LogRow               string   `protobuf:"bytes,1,opt,name=logRow,proto3" json:"logRow,omitempty"`
	Validity             string   `protobuf:"bytes,2,opt,name=validity,proto3" json:"validity,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PreviewResponse) Reset()         { *m = PreviewResponse{} }
func (m *PreviewResponse) String() string { return proto.CompactTextString(m) }
func (*PreviewResponse) ProtoMessage()    {}
func (*PreviewResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_99eb70fcb0bd5354, []int{3}
}

func (m *PreviewResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PreviewResponse.Unmarshal(m, b)
}
func (m *PreviewResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PreviewResponse.Marshal(b, m, deterministic)
}
func (m *PreviewResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PreviewResponse.Merge(m, src)
}
func (m *PreviewResponse) XXX_Size() int {
	return xxx_messageInfo_PreviewResponse.Size(m)
}
func (m *PreviewResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_PreviewResponse.DiscardUnknown(m)
}

var xxx_messageInfo_PreviewResponse proto.InternalMessageInfo

func (m *PreviewResponse) GetLogRow() string {
	if m != nil {
		return m.LogRow
	}
	return ""
}

func (m *PreviewResponse) GetValidity() string {
	if m != nil {
		return m.Validity
	}
	return ""
}

type UploadRequest struct {
	FileName             string   `protobuf:"bytes,1,opt,name=fileName,proto3" json:"fileName,omitempty"`
	Data                 []byte   `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UploadRequest) Reset()         { *m = UploadRequest{} }
func (m *UploadRequest) String() string { return proto.CompactTextString(m) }
func (*UploadRequest) ProtoMessage()    {}
func (*UploadRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_99eb70fcb0bd5354, []int{4}
}

func (m *UploadRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UploadRequest.Unmarshal(m, b)
}
func (m *UploadRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UploadRequest.Marshal(b, m, deterministic)
}
func (m *UploadRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UploadRequest.Merge(m, src)
}
func (m *UploadRequest) XXX_Size() int {
	return xxx_messageInfo_UploadRequest.Size(m)
}
func (m *UploadRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_UploadRequest.DiscardUnknown(m)
}

var xxx_messageInfo_UploadRequest proto.InternalMessageInfo

func (m *UploadRequest) GetFileName() string {
	if m != nil {
		return m.FileName
	}
	return ""
}

func (m *UploadRequest) GetData() []byte {
	if m != nil {
		return m.Data
	}
	return nil
}

type UploadResponse struct {
	Finished             bool     `protobuf:"varint,1,opt,name=finished,proto3" json:"finished,omitempty"`
	FileHash             string   `protobuf:"bytes,2,opt,name=fileHash,proto3" json:"fileHash,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UploadResponse) Reset()         { *m = UploadResponse{} }
func (m *UploadResponse) String() string { return proto.CompactTextString(m) }
func (*UploadResponse) ProtoMessage()    {}
func (*UploadResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_99eb70fcb0bd5354, []int{5}
}

func (m *UploadResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UploadResponse.Unmarshal(m, b)
}
func (m *UploadResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UploadResponse.Marshal(b, m, deterministic)
}
func (m *UploadResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UploadResponse.Merge(m, src)
}
func (m *UploadResponse) XXX_Size() int {
	return xxx_messageInfo_UploadResponse.Size(m)
}
func (m *UploadResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_UploadResponse.DiscardUnknown(m)
}

var xxx_messageInfo_UploadResponse proto.InternalMessageInfo

func (m *UploadResponse) GetFinished() bool {
	if m != nil {
		return m.Finished
	}
	return false
}

func (m *UploadResponse) GetFileHash() string {
	if m != nil {
		return m.FileHash
	}
	return ""
}

type ListRequest struct {
	Suffix               string   `protobuf:"bytes,1,opt,name=suffix,proto3" json:"suffix,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ListRequest) Reset()         { *m = ListRequest{} }
func (m *ListRequest) String() string { return proto.CompactTextString(m) }
func (*ListRequest) ProtoMessage()    {}
func (*ListRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_99eb70fcb0bd5354, []int{6}
}

func (m *ListRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListRequest.Unmarshal(m, b)
}
func (m *ListRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListRequest.Marshal(b, m, deterministic)
}
func (m *ListRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListRequest.Merge(m, src)
}
func (m *ListRequest) XXX_Size() int {
	return xxx_messageInfo_ListRequest.Size(m)
}
func (m *ListRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ListRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ListRequest proto.InternalMessageInfo

func (m *ListRequest) GetSuffix() string {
	if m != nil {
		return m.Suffix
	}
	return ""
}

type ListResponse struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Size                 int64    `protobuf:"varint,2,opt,name=size,proto3" json:"size,omitempty"`
	Mode                 uint32   `protobuf:"varint,3,opt,name=mode,proto3" json:"mode,omitempty"`
	Validity             string   `protobuf:"bytes,4,opt,name=validity,proto3" json:"validity,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ListResponse) Reset()         { *m = ListResponse{} }
func (m *ListResponse) String() string { return proto.CompactTextString(m) }
func (*ListResponse) ProtoMessage()    {}
func (*ListResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_99eb70fcb0bd5354, []int{7}
}

func (m *ListResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListResponse.Unmarshal(m, b)
}
func (m *ListResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListResponse.Marshal(b, m, deterministic)
}
func (m *ListResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListResponse.Merge(m, src)
}
func (m *ListResponse) XXX_Size() int {
	return xxx_messageInfo_ListResponse.Size(m)
}
func (m *ListResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_ListResponse.DiscardUnknown(m)
}

var xxx_messageInfo_ListResponse proto.InternalMessageInfo

func (m *ListResponse) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *ListResponse) GetSize() int64 {
	if m != nil {
		return m.Size
	}
	return 0
}

func (m *ListResponse) GetMode() uint32 {
	if m != nil {
		return m.Mode
	}
	return 0
}

func (m *ListResponse) GetValidity() string {
	if m != nil {
		return m.Validity
	}
	return ""
}

func init() {
	proto.RegisterType((*DownloadRequest)(nil), "proto.DownloadRequest")
	proto.RegisterType((*DownloadResponse)(nil), "proto.DownloadResponse")
	proto.RegisterType((*PreviewRequest)(nil), "proto.PreviewRequest")
	proto.RegisterType((*PreviewResponse)(nil), "proto.PreviewResponse")
	proto.RegisterType((*UploadRequest)(nil), "proto.UploadRequest")
	proto.RegisterType((*UploadResponse)(nil), "proto.UploadResponse")
	proto.RegisterType((*ListRequest)(nil), "proto.ListRequest")
	proto.RegisterType((*ListResponse)(nil), "proto.ListResponse")
}

func init() { proto.RegisterFile("filetansfer_service.proto", fileDescriptor_99eb70fcb0bd5354) }

var fileDescriptor_99eb70fcb0bd5354 = []byte{
	// 383 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x52, 0xdd, 0x4b, 0xfb, 0x30,
	0x14, 0xfd, 0x75, 0xdb, 0xaf, 0xd6, 0xeb, 0x3e, 0x24, 0xba, 0x3a, 0xfb, 0x34, 0x02, 0x93, 0x3d,
	0x0d, 0x71, 0x4f, 0xc2, 0x60, 0x2f, 0x0a, 0x7b, 0x10, 0x91, 0xaa, 0xcf, 0x12, 0xd7, 0xd4, 0x05,
	0xba, 0xa6, 0x36, 0xd9, 0xa6, 0x3e, 0xf9, 0xa7, 0x4b, 0xd3, 0xa4, 0x1f, 0x13, 0x7c, 0xca, 0x3d,
	0x87, 0x93, 0x93, 0x7b, 0x4f, 0x2e, 0x9c, 0x87, 0x2c, 0xa2, 0x92, 0xc4, 0x22, 0xa4, 0xe9, 0x8b,
	0xa0, 0xe9, 0x96, 0x2d, 0xe9, 0x24, 0x49, 0xb9, 0xe4, 0xe8, 0xbf, 0x3a, 0xf0, 0x08, 0x7a, 0x37,
	0x7c, 0x17, 0x47, 0x9c, 0x04, 0x3e, 0x7d, 0xdf, 0x50, 0x21, 0x11, 0x82, 0x56, 0x42, 0xe4, 0x6a,
	0x60, 0x0d, 0xad, 0xf1, 0xa1, 0xaf, 0x6a, 0x7c, 0x01, 0xc7, 0xa5, 0x4c, 0x24, 0x3c, 0x16, 0x34,
	0xd3, 0x05, 0x44, 0x12, 0xa5, 0x6b, 0xfb, 0xaa, 0xc6, 0x33, 0xe8, 0x3e, 0xa4, 0x74, 0xcb, 0xe8,
	0xee, 0x0f, 0x37, 0xe4, 0x82, 0x4d, 0x96, 0x92, 0xf1, 0x78, 0xd0, 0x50, 0xac, 0x46, 0xf8, 0x16,
	0x7a, 0xc5, 0x6d, 0xfd, 0x88, 0x0b, 0x76, 0xc4, 0xdf, 0x7c, 0xbe, 0xd3, 0x06, 0x1a, 0x21, 0x0f,
	0x9c, 0x2d, 0x89, 0x58, 0xc0, 0xe4, 0xa7, 0x36, 0x29, 0x30, 0x9e, 0x43, 0xe7, 0x39, 0xa9, 0x4e,
	0xe4, 0x81, 0x93, 0x05, 0x71, 0x4f, 0xd6, 0x54, 0xdb, 0x14, 0xb8, 0x98, 0xa2, 0x51, 0x99, 0x62,
	0x01, 0x5d, 0x63, 0xa0, 0xdb, 0x50, 0x0e, 0x31, 0x13, 0x2b, 0x1a, 0x28, 0x07, 0xc7, 0x2f, 0xb0,
	0x71, 0x5f, 0x10, 0xb1, 0x32, 0xad, 0x18, 0x8c, 0x47, 0x70, 0x74, 0xc7, 0x84, 0x34, 0x8d, 0xb8,
	0x60, 0x8b, 0x4d, 0x18, 0xb2, 0x0f, 0x33, 0x4d, 0x8e, 0x70, 0x08, 0xed, 0x5c, 0x56, 0x46, 0x1b,
	0x97, 0xcd, 0xaa, 0x3a, 0xe3, 0x04, 0xfb, 0xa2, 0xea, 0x89, 0xa6, 0xaf, 0xea, 0x8c, 0x5b, 0xf3,
	0x80, 0x0e, 0x9a, 0x43, 0x6b, 0xdc, 0xf1, 0x55, 0x5d, 0x4b, 0xa6, 0x55, 0x4f, 0xe6, 0xea, 0xbb,
	0x01, 0xbd, 0xa7, 0x34, 0xdf, 0x87, 0xc7, 0x7c, 0x1d, 0xd0, 0x1c, 0x1c, 0xf3, 0xb5, 0xc8, 0xcd,
	0x97, 0x63, 0xb2, 0xb7, 0x12, 0xde, 0xd9, 0x2f, 0x3e, 0x6f, 0x14, 0xff, 0xbb, 0xb4, 0xd0, 0x0c,
	0x0e, 0xf4, 0xaf, 0xa1, 0xbe, 0xd6, 0xd5, 0x77, 0xc0, 0x73, 0xf7, 0xe9, 0xca, 0xed, 0x6b, 0xb0,
	0xf3, 0xac, 0xd1, 0xa9, 0x56, 0xd5, 0xfe, 0xce, 0xeb, 0xef, 0xb1, 0xe6, 0xea, 0xd8, 0x42, 0x53,
	0x68, 0x65, 0xa9, 0x21, 0xa4, 0x25, 0x95, 0xa4, 0xbd, 0x93, 0x1a, 0x57, 0xbe, 0xf7, 0x6a, 0x2b,
	0x7e, 0xfa, 0x13, 0x00, 0x00, 0xff, 0xff, 0x8c, 0x9c, 0xd8, 0xa2, 0x1b, 0x03, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// TransferServiceClient is the client API for TransferService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type TransferServiceClient interface {
	Download(ctx context.Context, in *DownloadRequest, opts ...grpc.CallOption) (TransferService_DownloadClient, error)
	Preview(ctx context.Context, in *PreviewRequest, opts ...grpc.CallOption) (TransferService_PreviewClient, error)
	Upload(ctx context.Context, opts ...grpc.CallOption) (TransferService_UploadClient, error)
	List(ctx context.Context, in *ListRequest, opts ...grpc.CallOption) (TransferService_ListClient, error)
}

type transferServiceClient struct {
	cc *grpc.ClientConn
}

func NewTransferServiceClient(cc *grpc.ClientConn) TransferServiceClient {
	return &transferServiceClient{cc}
}

func (c *transferServiceClient) Download(ctx context.Context, in *DownloadRequest, opts ...grpc.CallOption) (TransferService_DownloadClient, error) {
	stream, err := c.cc.NewStream(ctx, &_TransferService_serviceDesc.Streams[0], "/proto.TransferService/Download", opts...)
	if err != nil {
		return nil, err
	}
	x := &transferServiceDownloadClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type TransferService_DownloadClient interface {
	Recv() (*DownloadResponse, error)
	grpc.ClientStream
}

type transferServiceDownloadClient struct {
	grpc.ClientStream
}

func (x *transferServiceDownloadClient) Recv() (*DownloadResponse, error) {
	m := new(DownloadResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *transferServiceClient) Preview(ctx context.Context, in *PreviewRequest, opts ...grpc.CallOption) (TransferService_PreviewClient, error) {
	stream, err := c.cc.NewStream(ctx, &_TransferService_serviceDesc.Streams[1], "/proto.TransferService/Preview", opts...)
	if err != nil {
		return nil, err
	}
	x := &transferServicePreviewClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type TransferService_PreviewClient interface {
	Recv() (*PreviewResponse, error)
	grpc.ClientStream
}

type transferServicePreviewClient struct {
	grpc.ClientStream
}

func (x *transferServicePreviewClient) Recv() (*PreviewResponse, error) {
	m := new(PreviewResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *transferServiceClient) Upload(ctx context.Context, opts ...grpc.CallOption) (TransferService_UploadClient, error) {
	stream, err := c.cc.NewStream(ctx, &_TransferService_serviceDesc.Streams[2], "/proto.TransferService/Upload", opts...)
	if err != nil {
		return nil, err
	}
	x := &transferServiceUploadClient{stream}
	return x, nil
}

type TransferService_UploadClient interface {
	Send(*UploadRequest) error
	CloseAndRecv() (*UploadResponse, error)
	grpc.ClientStream
}

type transferServiceUploadClient struct {
	grpc.ClientStream
}

func (x *transferServiceUploadClient) Send(m *UploadRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *transferServiceUploadClient) CloseAndRecv() (*UploadResponse, error) {
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	m := new(UploadResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *transferServiceClient) List(ctx context.Context, in *ListRequest, opts ...grpc.CallOption) (TransferService_ListClient, error) {
	stream, err := c.cc.NewStream(ctx, &_TransferService_serviceDesc.Streams[3], "/proto.TransferService/List", opts...)
	if err != nil {
		return nil, err
	}
	x := &transferServiceListClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type TransferService_ListClient interface {
	Recv() (*ListResponse, error)
	grpc.ClientStream
}

type transferServiceListClient struct {
	grpc.ClientStream
}

func (x *transferServiceListClient) Recv() (*ListResponse, error) {
	m := new(ListResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// TransferServiceServer is the server API for TransferService service.
type TransferServiceServer interface {
	Download(*DownloadRequest, TransferService_DownloadServer) error
	Preview(*PreviewRequest, TransferService_PreviewServer) error
	Upload(TransferService_UploadServer) error
	List(*ListRequest, TransferService_ListServer) error
}

// UnimplementedTransferServiceServer can be embedded to have forward compatible implementations.
type UnimplementedTransferServiceServer struct {
}

func (*UnimplementedTransferServiceServer) Download(req *DownloadRequest, srv TransferService_DownloadServer) error {
	return status.Errorf(codes.Unimplemented, "method Download not implemented")
}
func (*UnimplementedTransferServiceServer) Preview(req *PreviewRequest, srv TransferService_PreviewServer) error {
	return status.Errorf(codes.Unimplemented, "method Preview not implemented")
}
func (*UnimplementedTransferServiceServer) Upload(srv TransferService_UploadServer) error {
	return status.Errorf(codes.Unimplemented, "method Upload not implemented")
}
func (*UnimplementedTransferServiceServer) List(req *ListRequest, srv TransferService_ListServer) error {
	return status.Errorf(codes.Unimplemented, "method List not implemented")
}

func RegisterTransferServiceServer(s *grpc.Server, srv TransferServiceServer) {
	s.RegisterService(&_TransferService_serviceDesc, srv)
}

func _TransferService_Download_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(DownloadRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(TransferServiceServer).Download(m, &transferServiceDownloadServer{stream})
}

type TransferService_DownloadServer interface {
	Send(*DownloadResponse) error
	grpc.ServerStream
}

type transferServiceDownloadServer struct {
	grpc.ServerStream
}

func (x *transferServiceDownloadServer) Send(m *DownloadResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _TransferService_Preview_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(PreviewRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(TransferServiceServer).Preview(m, &transferServicePreviewServer{stream})
}

type TransferService_PreviewServer interface {
	Send(*PreviewResponse) error
	grpc.ServerStream
}

type transferServicePreviewServer struct {
	grpc.ServerStream
}

func (x *transferServicePreviewServer) Send(m *PreviewResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _TransferService_Upload_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(TransferServiceServer).Upload(&transferServiceUploadServer{stream})
}

type TransferService_UploadServer interface {
	SendAndClose(*UploadResponse) error
	Recv() (*UploadRequest, error)
	grpc.ServerStream
}

type transferServiceUploadServer struct {
	grpc.ServerStream
}

func (x *transferServiceUploadServer) SendAndClose(m *UploadResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *transferServiceUploadServer) Recv() (*UploadRequest, error) {
	m := new(UploadRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _TransferService_List_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(ListRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(TransferServiceServer).List(m, &transferServiceListServer{stream})
}

type TransferService_ListServer interface {
	Send(*ListResponse) error
	grpc.ServerStream
}

type transferServiceListServer struct {
	grpc.ServerStream
}

func (x *transferServiceListServer) Send(m *ListResponse) error {
	return x.ServerStream.SendMsg(m)
}

var _TransferService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "proto.TransferService",
	HandlerType: (*TransferServiceServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "Download",
			Handler:       _TransferService_Download_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "Preview",
			Handler:       _TransferService_Preview_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "Upload",
			Handler:       _TransferService_Upload_Handler,
			ClientStreams: true,
		},
		{
			StreamName:    "List",
			Handler:       _TransferService_List_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "filetansfer_service.proto",
}
